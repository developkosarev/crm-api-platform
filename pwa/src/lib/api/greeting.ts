export async function fetchGreeting(token: string) {
  const res = await fetch('/greetings', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/ld+json',
    },
  });
  if (!res.ok) {
    throw new Error(`Ошибка запроса: ${res.status}`);
  }
  return res.json();
}
