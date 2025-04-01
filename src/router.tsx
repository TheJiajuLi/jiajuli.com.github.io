// src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';
import CommunityUpload from './pages/CommunityUpload';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/community-upload',
    element: <CommunityUpload />
  }
]);