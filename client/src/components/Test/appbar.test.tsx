import { render, screen, fireEvent } from '@testing-library/react';
import Appbar from '../appbar';

describe('Appbar', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    
test('should show login button if user is not logged in', () => {
    render(<Appbar />);
    expect(screen.getByText('เข้าสู่ระบบ')).toBeInTheDocument();
});

test('should show user avatar if user is logged in', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));
    render(<Appbar />);
    expect(screen.getByAltText('Remy Sharp')).toBeInTheDocument();
});

test('should set loggedIn state to true when handleLogin is called', () => {
    const { getByText } = render(<Appbar />);
    fireEvent.click(getByText('เข้าสู่ระบบ'));
    expect(screen.getByText('เข้าสู่ระบบ')).not.toBeInTheDocument();
});

test('should set loggedOut state to true when handleLogout is called', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));
    const { getByAltText } = render(<Appbar />);
    fireEvent.click(getByAltText('Remy Sharp'));
    fireEvent.click(screen.getByText('ออกจากระบบ'));
    expect(localStorage.getItem('user')).toBe(null);
});

test('should show user menu when handleOpenUserMenu is called', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));
    const { getByAltText } = render(<Appbar />);
    fireEvent.click(getByAltText('Remy Sharp'));
    expect(screen.getByText('ชำระเงิน')).toBeInTheDocument();
});

test('should close user menu when handleCloseUserMenu is called', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'John Doe' }));
    const { getByAltText } = render(<Appbar />);
    fireEvent.click(getByAltText('Remy Sharp'));
    fireEvent.click(screen.getByText('ออกจากระบบ'));
    expect(screen.queryByText('ชำระเงิน')).not.toBeInTheDocument();
});


});