import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResultPage from './pages/ResultPage';
import ReportPage from './pages/ReportPage';
import NetworkmapPage from './pages/NetworkmapPage';
import PostListContainer from './containers/PostListContainer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* 전역 스타일 적용 */}
        <Router>
          <Routes>
            <Route path="/post" element={<PostListContainer />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/networkmap" element={<NetworkmapPage />} />
            <Route path="/report" element={<ReportPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;