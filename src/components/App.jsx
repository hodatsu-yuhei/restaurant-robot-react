import React from "react";

import Header from "./Header/Header";
import RobotTalk from "./RobotTalk/RobotTalk";
import Users from "./UserTalk/UserTalk";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RobotTalk question="こんにちは、ロボです。あなたはアップルレストランは好きですか？" />
        <Users />
        <RobotTalk question="あなたのオススメのレストランを教えてください。" />

        {/* <section className="user">
          <img src="images/user.png" className="user-icon" />
          <input type="text" placeholder="レストラン名を入力" />
        </section>  */}
      </main>
    </div>
  );
}

export default App;
