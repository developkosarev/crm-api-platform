export const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate();

// ✅ generator: build months dynamically
const buildMonths = (year: number, monthCount: number) => {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0]; // e.g. "2025-09-12"

  return Array.from({ length: monthCount }, (_, idx) => {
    const month = idx; // 0 = Jan
    const name = new Date(year, month, 1).toLocaleString('default', {
      month: 'long',
    });

    const daysInMonth = getDaysInMonth(year, month);

    const days = Array.from({ length: daysInMonth }, (_, dayIdx) => {
      const day = dayIdx + 1;
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(
        day,
      ).padStart(2, '0')}`;

      return {
        date: dateStr,
        isCurrentMonth: true,
        isToday: dateStr === todayStr,
      };
    });

    return { name, days };
  });
};
