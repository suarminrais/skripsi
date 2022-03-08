
export const perkembanganStatus = (status) => {
  switch (status) {
    case "1":
      return 'Menunggu Pendanaan';
    case "2":
      return 'Program Dalam Masa Budidaya';
    case "3":
      return 'Program Dalam Masa Panen';
    case "4":
      return 'Program Selesai';
    case "5":
      return 'Program Ditolak';
    default:
      return 'Sedang diproses';
  }
}