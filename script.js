function createCalendar(year, month) {
    // create table element
    const table = document.createElement('table');
  
    // create table head element
    const thead = document.createElement('thead');
    const weekdays = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    weekdays.forEach(weekday => {
      const th = document.createElement('th');
      th.textContent = weekday;
      thead.appendChild(th);
    });
    table.appendChild(thead);
  
    // create table body element
    const tbody = document.createElement('tbody');
  
    // determine the number of days in the month
    const numDays = new Date(year, month + 1, 0).getDate();
  
    // find the day of the week of the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
  
    // create rows for the days of the month
    let currentDay = 1;
    let currentWeek = 1;
    while (currentDay <= numDays) {
      // create a new row for each week
        const tr = document.createElement('tr');
    
        // create cells for each day of the week
        for (let i = 0; i < 7; i++) {
            const td = document.createElement('td');
            if (currentWeek === 1 && i < firstDay) {
                // leave the cell empty for days in the previous month
                td.textContent = '';
            } else if (currentDay > numDays) {
                // leave the cell empty for days in the next month
                td.textContent = '';
            } else {
                // fill the cell with the current day
                td.textContent = currentDay;
                currentDay++;
            }
            tr.appendChild(td);
        }
  
        // add the row to the table body
        tbody.appendChild(tr);
        currentWeek++;
    }
  
    // add the table body to the table
    table.appendChild(tbody);
  
    return table;
}
const calendar = createCalendar(2022, 0);
document.getElementById('calendar').appendChild(calendar);