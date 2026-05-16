import { BadgeCheck, GraduationCap } from "lucide-react";
import { impactPoints } from "../data";

export default function EsgImpact() {
  return (
    <section className="impact section-pad" id="impact">
      <div className="impact-grid">
        <div className="about-col">
          <p className="section-kicker">ESG & Impact</p>
          <h2>Building Sustainable Impact</h2>
          <p>
            Uhuru Group believes infrastructure development and economic participation should
            move together. Operations are grounded in transformation, skills development,
            responsible procurement and ethical business conduct.
          </p>
          <p>
            Through Uhuru Academy and enterprise enablement initiatives, the group supports
            commercially ready artisan enterprises that can participate meaningfully in the
            South African economy.
          </p>
        </div>

        <div className="impact-points-col">
          {impactPoints.map((point) => (
            <div className="impact-point" key={point}>
              <BadgeCheck size={18} />
              <span>{point}</span>
            </div>
          ))}
          <div className="academy-box">
            <GraduationCap size={24} />
            <div>
              <h3>Uhuru Academy</h3>
              <p>
                A dedicated artisan development and enterprise readiness platform focused on
                skills, operational excellence and sustainable enterprise participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
