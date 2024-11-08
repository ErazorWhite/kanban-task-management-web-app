import { Route, Routes } from 'react-router-dom';
import { Layout } from '../Layout/Layout.tsx';
import { Board } from '../Board/Board.tsx';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Board />} />
      </Route>
    </Routes>
  );
};
