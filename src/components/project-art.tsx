"use client";
import { ArrowUpRight, Layers, SlidersHorizontal } from "lucide-react";
import type { projects } from "@/data/portfolio";
import { usePortfolio } from "./provider";
export type Project = (typeof projects)[number];
export function ProjectArt({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const { lang } = usePortfolio();
  return (
    <div className={`project-art ${project.color} ${large ? "large" : ""}`}>
      <div className="art-orbit" />
      <div className="dashboard" dir="ltr" aria-hidden="true">
        <div className="dashboard-top">
          <span className="dashboard-logo">
            <Layers size={13} />
            {project.id.split("-")[0]}
            <b> / workspace</b>
          </span>
          <span className="window-dots">•••</span>
        </div>
        <div className="dashboard-body">
          <aside>
            <div className="dash-active" />
            <i />
            <i />
            <i />
            <i />
          </aside>
          <div className="dashboard-main">
            <div className="dashboard-heading">
              <span>Overview</span>
              <SlidersHorizontal size={11} />
            </div>
            <div className="dashboard-stats">
              {["Orders", "Customers", "Activity"].map((item, i) => (
                <div key={item}>
                  <small>{item}</small>
                  <b>{["128", "84", "96%"][i]}</b>
                  <span>↗</span>
                </div>
              ))}
            </div>
            <div className="chart-label">
              Activity overview <ArrowUpRight size={10} />
            </div>
            <div className="bar-chart">
              {[34, 52, 45, 68, 56, 79, 72, 88, 68, 94, 81, 100].map((n, i) => (
                <span style={{ height: `${n}%` }} key={i} />
              ))}
            </div>
            <div className="dash-table">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>
      <span className="art-label">
        {lang === "en"
          ? "ILLUSTRATIVE INTERFACE · NOT A LIVE SCREENSHOT"
          : "طرح نمایشی رابط · تصویر واقعی پروژه نیست"}
      </span>
    </div>
  );
}
