
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
	providedIn: 'root'
})
export class NotifyService {

	constructor() {
	}

	succesAlert(title, text) {
		Swal.fire(
			title,
			text,
			'success'
		)
	}

	//   succesConfirmationAlert(text) {
	//     const swalWithBootstrapButtons = swal.mixin({
	//       confirmButtonClass: 'oms-btn-save',
	//       cancelButtonClass: 'oms-btn-cancel',
	//       buttonsStyling: true,
	//     })
	//     return swalWithBootstrapButtons({
	//       title: this.attention,
	//       text: text,
	//       type: 'warning',
	//       showCancelButton: true,
	//       confirmButtonText: this.confirm,
	//       cancelButtonText: this.cancel,
	//       reverseButtons: true
	//     })
	//   }
	//   notification(title, text, date, isLink) {
	//     const swalWithBootstrapButtons = swal.mixin({
	//       confirmButtonClass: 'oms-btn-save',
	//       cancelButtonClass: 'oms-btn-cancel',
	//       buttonsStyling: true,
	//       customClass: 'oms-notification'
	//     })
	//     return swalWithBootstrapButtons({
	//       title: title,
	//       text: text,
	//       footer: date,
	//       showCloseButton: true,
	//       showConfirmButton: isLink,
	//       confirmButtonText: this.changePassword,
	//       reverseButtons: true
	//     })
	//   }
	//   errorAlert(error,errorText){
	//     const swalWithBootstrapButtons = swal.mixin({
	//       confirmButtonClass: 'oms-btn-save',
	//       cancelButtonClass: 'oms-btn-cancel',
	//       buttonsStyling: true,
	//     })
	//           swalWithBootstrapButtons({
	//             title: error,
	//             text: errorText,
	//             type: 'error',
	//             confirmButtonText: this.confirm,
	//             reverseButtons: true
	//           })
	//   }

	warningAlert(warning, warningText) {
		return Swal.fire({
			title: warning,
			text: warningText,
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#28a745',
			confirmButtonText: 'Aceptar',
			cancelButtonText: 'Cancelar'
		});
	}


}
