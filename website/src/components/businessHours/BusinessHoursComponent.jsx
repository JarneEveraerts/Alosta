import React from "react";
import { Card } from "primereact/card";
import "./BusinessHoursComponent.css";

const BusinessHoursCard = () => {
  const businessHours = [
    { day: "Maandag", hours: "Alleen op afspraak" }, // Monday
    { day: "Dinsdag", hours: "Alleen op afspraak" }, // Tuesday
    { day: "Woensdag", hours: "14:00 - 20:00" }, // Wednesday
    { day: "Donderdag", hours: "Alleen op afspraak" }, // Thursday
    { day: "Vrijdag", hours: "16:00 - 21:00" }, // Friday
    { day: "Zaterdag", hours: "14:00 - 22:00" }, // Saturday
    { day: "Zondag", hours: "14:00 - 20:00" }, // Sunday
  ];

  const content = (
    <Card>
      {businessHours.map((item, index) => (
        <div
          key={item.day}
          className={`dayWrapper ${index % 2 === 0 ? "evenDay" : ""}`}
        >
          <div className="day">{item.day}: </div>
          <div className="hours">{item.hours}</div>
        </div>
      ))}
    </Card>
  );

  return content;
};

export default BusinessHoursCard;
