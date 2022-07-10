import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], searchInput: string): any[] {
        if (!items) return [];
        if (!searchInput) {
            return items;
        }
        searchInput = searchInput.toLowerCase();
        return items.filter(employee => employee.pdetailsData.fnameCtrl.toLowerCase().includes(searchInput) || employee.cstatusData.desigCtrl.toLowerCase().includes(searchInput) || employee.cstatusData.deptCtrl.toLowerCase().includes(searchInput));
    }
}