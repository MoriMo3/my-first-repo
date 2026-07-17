import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const Home = () => {
  return (
    <div style={styles.card}>
      <h1>ホームページへようこそ！</h1>
      <p>このサイトでは様々な情報を提供しています。</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div style={styles.card}>
      <h1>プロフィール</h1>
      <p>ここはプロフィールページです。</p>
    </div>
  );
};

const Contact = () => {
  return (
    <div style={styles.card}>
      <h1>お問い合わせ</h1>
      <p>お問い合わせはこちらからお願いします。</p>
    </div>
  );
};

const NotFound = () => {
  return (
    <div style={styles.card}>
      <h1>404 Not Found</h1>
      <p>ページが見つかりません。</p>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <header style={styles.header}>
        <h2 style={styles.logo}>MyApp</h2>

        <nav style={styles.nav}>
          <Link style={styles.link} to="/">
            🏠 ホーム
          </Link>
          <Link style={styles.link} to="/profile">
            👤 プロフィール
          </Link>
          <Link style={styles.link} to="/contact">
            ✉️ お問い合わせ
          </Link>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",
    backgroundColor: "#4f46e5",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 40px",
    boxSizing: "border-box",
  },

  logo: {
    fontSize: "28px",
  },

  nav: {
    display: "flex",
    gap: "30px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
    fontWeight: "bold",
  },

  main: {
    minHeight: "100vh",
    backgroundColor: "#f3f6fa",
    paddingTop: "130px",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    backgroundColor: "white",
    width: "70%",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
};

export default App;