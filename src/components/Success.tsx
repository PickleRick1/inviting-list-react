import React from "react";
import svgSuccess from "../assets/success.svg";
type SuccessProps = {
  count: number;
};
export const Success: React.FC<SuccessProps> = ({ count }) => {
  return (
    <div className="success-block">
      <img src={svgSuccess} alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button
        onClick={() => window.location.reload()}
        className="send-invite-btn"
      >
        Назад
      </button>
    </div>
  );
};
