import { Link, Routes, Route } from 'react-router-dom';
import Info from './Info';
import Activity from './Activity';

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="info">Info</Link> | <Link to="activity">Activity</Link>
      </nav>

      <Routes>
        <Route path="info" element={<Info />} />
        <Route path="activity" element={<Activity />} />
      </Routes>
    </div>
  );
}
