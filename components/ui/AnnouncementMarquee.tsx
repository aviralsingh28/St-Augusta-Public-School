'use client'

export default function AnnouncementMarquee() {
  return (
    <div className="marquee-fixed">
      
      {/* Fixed Left Label (hidden on mobile) */}
      <div className="marquee-label">
        Special aviral     
         </div>

      {/* Marquee Area */}
      <div className="marquee-wrapper">
        <div className="marquee-content">
          <span>📢 Admissions Open for This Academic Session</span>
          <span>📝 Registration Free</span>
          <span>🏫 Safe & Child-Friendly Campus</span>
          <span>🎓 Quality Education with Experienced Faculty</span>
          <span>🤝 Parent–Teacher Meeting Scheduled Every Month</span>
          <span>📝 Registration Free</span>
        </div>

        {/* duplicate for seamless loop */}
        <div className="marquee-content">
          <span>📢 Admissions Open for This Academic Session</span>
          <span>📝 Registration Free</span>
          <span>🏫 Safe & Child-Friendly Campus</span>
          <span>🎓 Quality Education with Experienced Faculty</span>
          <span>🤝 Parent–Teacher Meeting Scheduled Every Month</span>
          <span>📝 Registration Free</span>
        </div>
      </div>

      <style jsx>{`
.marquee-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  z-index: 100;
  background: var(--primary);
  color: var(--primary-foreground);
  overflow: visible;
  padding-left: 5px;
}

/* LABEL COMES FORWARD */
.marquee-label {
  flex-shrink: 0;
  background: #facc15;
  color: #000;
  font-weight: 800;
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  white-space: nowrap;
  margin-left: -12px;
  box-shadow: 2px 0 6px rgba(0,0,0,0.2);
}

/* MARQUEE AREA */
.marquee-wrapper {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  white-space: nowrap;
  animation: marquee 25s linear infinite;
}

.marquee-content span {
  margin: 0 2rem;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 40px;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

/* MOBILE VIEW: hide special attention */
@media (max-width: 640px) {
  .marquee-label {
    display: none;
  }

  .marquee-content span {
    margin: 0 1.2rem;
    font-size: 0.8rem;
  }
}
      `}</style>
    </div>
  )
}
