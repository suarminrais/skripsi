import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const success = (message = "Berhasil") => MySwal.fire({
  position: 'top-end',
  icon: 'success',
  title: message,
  showConfirmButton: false,
  timer: 1500
})

export const failed = (message = "Opp.. gagal!") => MySwal.fire({
  icon: 'error',
  title: message,
  showConfirmButton: false,
  timer: 1500
})

const swalWithBootstrapButtons = MySwal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export const confirm = ({ title = "Kamu yakin ?", text = "Data akan hilang!", confirmButtonText = 'Hapus' }) => swalWithBootstrapButtons.fire({
  title,
  text,
  icon: 'warning',
  confirmButtonText,
})

export const invest = () => MySwal.fire({
  title: 'Investasi',
  html: `<input type="number" id="investasi" class="swal2-input" placeholder="Jumlah Investasi">`,
  confirmButtonText: 'Kirim',
  focusConfirm: false,
  preConfirm: () => {
    const investasi = MySwal.getPopup().querySelector('#investasi').value
    if (!investasi) {
      MySwal.showValidationMessage(`Masukan investasi kamu!`)
    }
    return { investasi: investasi }
  }
})
