import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-table-inv',
  imports: [DatePipe, NgFor],
  templateUrl: './table-inv.component.html',
  styleUrls: ['./table-inv.component.css']
})
export class TableInvComponent {

  // Propiedad para recibir las inversiones desde el componente padre
  @Input() investments: any[] = [];

  // Output para enviar eventos al componente padre
  @Output() addInvestmentEvent: EventEmitter<void> = new EventEmitter();
  @Output() removeInvestmentEvent: EventEmitter<number> = new EventEmitter(); // Enviar el ID de la inversión
  @Output() editInvestmentEvent: EventEmitter<number> = new EventEmitter(); // Enviar el ID de la inversión

  // Método para abrir el modal de agregar inversión
  openAddInvestmentModal() {
    this.addInvestmentEvent.emit();  // Emitir evento para abrir el modal
  }

  // Método para eliminar una inversión
  deleteInvestment(id: number) {
    this.removeInvestmentEvent.emit(id);  // Emitir el ID de la inversión para eliminar
  }

  // Método para editar una inversión
  editInvestment(id: number) {
    this.editInvestmentEvent.emit(id);  // Emitir el ID de la inversión para editar
  }
}
