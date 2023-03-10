//เป็นหน้าแอดมินดึงข้อมูลกิจกรรมทั้งหมดมาจาก Strapi
import AllAct from '../src/page2/allAct';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/extend-expect';

describe('AllAct', () => {
  it('renders the activity list', async () => { expect
    const { getByText } = render(<AllAct/>)
    expect(getByText('ประเภทกิจกรรม')).toBeInTheDocument();
    expect(getByText('Add Activity')).toBeInTheDocument();
  });

  it('filters activities by type', async () => {
    const { getByRole, getByText } = render(<AllAct />);
    fireEvent.change(getByRole('combobox'), { target: { value: '2' } });
    expect(getByText('กิจกรรมค่าย')).toBeInTheDocument();
    expect(screen.queryByText('กิจกรรมวิ่ง')).not.toBeInTheDocument();
  });

  it('searches activities by keyword', async () => {
    const { getByRole, getByText } = render(<AllAct />);
    fireEvent.change(getByRole('textbox'), { target: { value: 'camp' } });
    expect(getByText('Activity 1')).toBeInTheDocument();
    expect(screen.queryByText('Activity 2')).not.toBeInTheDocument();
  });

  it('navigates to add activity page', async () => {
    const { getByText } = render(<AllAct />);
    fireEvent.click(getByText('Add Activity'));
    expect(window.location.href).toContain('/addActivity');
  });
});
