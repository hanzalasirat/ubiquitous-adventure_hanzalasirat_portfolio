import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/style.map.css';

export default function MapPage() {
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const markerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentZoom, setCurrentZoom] = useState(13);

  // Custom marker icon with pulsing effect
  const createCustomIcon = (isUser = false) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="marker-container ${isUser ? 'user-marker' : 'standard-marker'}">
          <div class="marker-pulse"></div>
          <div class="marker-pin">
            ${isUser ? '📍' : '📌'}
          </div>
          <div class="marker-ring"></div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
  };

  // Add interactive controls
  const addCustomControls = (map) => {
    // Zoom control with animation
    const zoomControl = L.control.zoom({
      position: 'topright'
    });
    zoomControl.addTo(map);

    // Custom locate control
    const locateControl = L.Control.extend({
      onAdd: function() {
        const container = L.DomUtil.create('div', 'custom-locate-control');
        container.innerHTML = `
          <button class="locate-btn" title="Find my location">
            <span class="locate-icon">🎯</span>
          </button>
        `;
        container.querySelector('.locate-btn').onclick = () => {
          locateUser(map);
        };
        return container;
      }
    });
    map.addControl(new locateControl());

    // Scale bar
    L.control.scale({
      position: 'bottomright',
      metric: true,
      imperial: false
    }).addTo(map);

    // Fullscreen control
    const fullscreenControl = L.Control.extend({
      onAdd: function() {
        const container = L.DomUtil.create('div', 'custom-fullscreen-control');
        container.innerHTML = `
          <button class="fullscreen-btn" title="Toggle fullscreen">
            <span class="fullscreen-icon">⛶</span>
          </button>
        `;
        container.querySelector('.fullscreen-btn').onclick = () => {
          toggleFullscreen();
        };
        return container;
      }
    });
    map.addControl(new fullscreenControl());
  };

  const locateUser = (map) => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const location = { lat, lon };
        setUserLocation(location);
        setCurrentZoom(15);
        
        // Animate zoom in
        map.flyTo([lat, lon], 15, {
          duration: 1.5,
          easeLinearity: 0.25
        });

        // Remove existing marker
        if (markerRef.current) {
          map.removeLayer(markerRef.current);
        }

        // Add animated user marker
        markerRef.current = L.marker([lat, lon], {
          icon: createCustomIcon(true)
        }).addTo(map);
        markerRef.current.bindPopup(`
          <div class="custom-popup">
            <strong>📍 You are here</strong>
            <br>
            <small>${lat.toFixed(6)}, ${lon.toFixed(6)}</small>
            <br>
            <span class="popup-time">${new Date().toLocaleTimeString()}</span>
          </div>
        `).openPopup();

        setLoading(false);
        setMapReady(true);
      },
      (err) => {
        setError(err.message || 'Location access denied');
        setLoading(false);
        // Fallback to default view
        map.flyTo([51.505, -0.09], 10, {
          duration: 1.5
        });
      }
    );
  };

  const toggleFullscreen = () => {
    const container = containerRef.current.parentElement;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.() || container.webkitRequestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.() || document.webkitExitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Create map with enhanced settings
    mapRef.current = L.map(containerRef.current, {
      center: [51.505, -0.09],
      zoom: 13,
      preferCanvas: true,
      zoomControl: false, // We'll add custom controls
      fadeAnimation: true,
      zoomAnimation: true,
      markerZoomAnimation: true,
    });

    // Add tile layer with style
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      className: 'map-tiles',
    }).addTo(mapRef.current);

    // Add custom controls
    addCustomControls(mapRef.current);

    // Track zoom changes
    mapRef.current.on('zoomend', () => {
      setCurrentZoom(mapRef.current.getZoom());
    });

    // Auto-locate user
    locateUser(mapRef.current);

    // Handle resize
    const handleResize = () => {
      if (mapRef.current) {
        setTimeout(() => mapRef.current.invalidateSize(), 100);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
      }
    };
  }, []);

  return (
    <div className={`map-page ${isFullscreen ? 'fullscreen-mode' : ''}`}>
      <div className="map-card premium-card">
        <div className="map-header">
          <div className="map-header-left">
            <h2 className="map-title">🗺️ Interactive Map</h2>
            <div className="map-status">
              <span className={`status-dot ${mapReady ? 'active' : 'inactive'}`}></span>
              {mapReady ? 'Live' : 'Loading...'}
              {userLocation && (
                <span className="location-coords">
                  {userLocation.lat.toFixed(4)}°, {userLocation.lon.toFixed(4)}°
                </span>
              )}
            </div>
          </div>
          <div className="map-header-right">
            <div className="map-zoom-info">
              Zoom: {currentZoom}x
            </div>
          </div>
        </div>

        {loading && (
          <div className="map-loading-overlay">
            <div className="map-loader">
              <div className="loader-ring"></div>
              <div className="loader-ring"></div>
              <div className="loader-ring"></div>
              <span>Locating you...</span>
            </div>
          </div>
        )}

        {error && (
          <div className="map-error-toast">
            <span className="error-icon">⚠️</span>
            <span>{error}</span>
            <button className="retry-btn" onClick={() => {
              setError(null);
              setLoading(true);
              locateUser(mapRef.current);
            }}>
              Retry
            </button>
          </div>
        )}

        <div className="map-container-wrapper">
          <div className="map-container" ref={containerRef} />
          <div className="map-watermark">
            <span>📍 Interactive</span>
          </div>
        </div>

        <div className="map-footer">
          <div className="map-actions">
            <button className="action-btn" onClick={() => {
              if (mapRef.current) {
                mapRef.current.flyTo([51.505, -0.09], 10, {
                  duration: 1.5
                });
              }
            }}>
              🌍 Reset View
            </button>
            <button className="action-btn primary" onClick={() => {
              if (mapRef.current) {
                locateUser(mapRef.current);
              }
            }}>
              📍 Find Me
            </button>
          </div>
          <div className="map-legend">
            <span>🟢 Live Location</span>
            <span>📌 Points of Interest</span>
          </div>
        </div>
      </div>
    </div>
  );
}