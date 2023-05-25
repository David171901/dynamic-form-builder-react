export const getFormattedDate = (): string => {
  const currentDate: Date = new Date();
  const month: string = String(currentDate.getMonth() + 1).padStart(2, "0"); // Obtener el mes (se agrega 1 porque los meses comienzan en 0)
  const day: string = String(currentDate.getDate()).padStart(2, "0"); // Obtener el día
  const year: number = currentDate.getFullYear(); // Obtener el año

  return `${month}-${day}-${year}`;
};
