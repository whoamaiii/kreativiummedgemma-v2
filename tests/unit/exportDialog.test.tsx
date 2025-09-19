import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExportDialog } from '@/components/ExportDialog';

describe('ExportDialog', () => {
  it('allows selecting options and confirms', async () => {
    const onConfirm = vi.fn();
    const user = userEvent.setup();
    render(<ExportDialog open={true} onOpenChange={() => {}} onConfirm={onConfirm} defaultFormat="pdf" />);

    // open selects and pick values
    await user.click(screen.getByLabelText('Format'));
    await user.click(await screen.findByText('PDF'));

    await user.click(screen.getByLabelText('Template'));
    await user.click(await screen.findByText('Detailed (full)'));

    await user.click(screen.getByLabelText('Chart quality'));
    await user.click(await screen.findByText('High'));

    await user.click(screen.getByLabelText('Color scheme'));
    await user.click(await screen.findByText('Default'));

    // toggle include raw data
    await user.click(screen.getByLabelText('Include raw data appendix'));

    await user.click(screen.getByRole('button', { name: 'Export' }));
    expect(onConfirm).toHaveBeenCalled();
  });
});
