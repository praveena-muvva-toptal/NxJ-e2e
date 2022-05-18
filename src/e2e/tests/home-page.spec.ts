describe('Verifying Home page Navigation', () => {
//   beforeEach(async () => {
//     await browser.url('https://www.perksatwork.com/login');
//   });

  it('TC #1: Should navigate to home page', async () => {
    // await expect(browser).toHaveTitle('Me | Timesheet | Overdue-timesheets');
    await browser.url('https://www.perksatwork.com/login');

  });
});
