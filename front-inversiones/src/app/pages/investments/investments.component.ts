import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { TableInvComponent } from './components/table-inv/table-inv.component';

@Component({
  selector: 'app-investments',
  imports: [NavbarComponent, FormsModule, NgIf, TableInvComponent],
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  investments = [
    { id: 1, name: 'Inversión A', amount: 10000, count: 50, alarma: true, date: new Date('2023-03-25') },
    { id: 2, name: 'Inversión B', amount: 5000, count: 20, alarma: false, date: new Date('2023-04-10') },
    { id: 3, name: 'Inversión C', amount: 15000, count: 100, alarma: true, date: new Date('2023-02-01') }
  ];

  isAddModalOpen = false;
  newInvestment = { name: '', amount: 0, count: 0, alarma: false, date: '' };

  // Método para abrir el modal de agregar inversión
  openAddInvestmentModal() {
    this.isAddModalOpen = true;
  }

  // Método para cerrar el modal de agregar inversión
  closeAddInvestmentModal() {
    this.isAddModalOpen = false;
    this.newInvestment = { name: '', amount: 0, count: 0, alarma: false, date: '' }; // Reset form
  }

  // Método para agregar nueva inversión
  addInvestment() {
    const newId = this.investments.length + 1;
    this.investments.push({
      id: newId,
      name: this.newInvestment.name,
      amount: this.newInvestment.amount,
      count: this.newInvestment.count,
      alarma: this.newInvestment.alarma,
      date: new Date(this.newInvestment.date)
    });
    this.closeAddInvestmentModal(); // Close modal after adding
  }

  // Método para editar una inversión
  editInvestment(id: number) {
    // const investmentToEdit = this.investments.find(investment => investment.id === id);
    // if (investmentToEdit) {
    //   this.newInvestment = { ...investmentToEdit }; // Copy the data to the form
    //   this.openAddInvestmentModal(); // Open the modal with pre-filled data
    // }
  }

  // Método para eliminar una inversión
  deleteInvestment(id: number) {
    this.investments = this.investments.filter(investment => investment.id !== id);
  }
}
