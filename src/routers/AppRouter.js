import React from 'react';
import { Routes, Route, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory({ v5Compat: true });
const AppRouter = () => (
    <HistoryRouter history={history} forceRefresh={true}>
      <Routes>
        <Route path="/" element={<LoginPage />}/>
        <Route path="/dashboard" element={<PrivateRoute><ExpenseDashboardPage /></PrivateRoute>}/>
        <Route path="/create" element={<PrivateRoute><AddExpensePage /></PrivateRoute>}/>
        <Route path="/edit/:id" element={<PrivateRoute><EditExpensePage /></PrivateRoute>}/>
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </HistoryRouter>
)

export default AppRouter;



