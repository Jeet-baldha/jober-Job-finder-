
const findExperience = (experience) => {
    let totalMonthOfExperience = 0;

    if (experience.length > 0) {
        experience.forEach(exp => {
            let stDate = new Date(exp.start_date);
            let enDate = (exp.end_date.toLowerCase() === "present") ? new Date() : new Date(exp.end_date);
    
            let totalYear = enDate.getFullYear() - stDate.getFullYear();
            console.log(totalYear);
            let totalMonth = 0;
    
            if (totalYear > 0) {
                totalMonth = (totalYear - 1) * 12; 
                totalMonth += (12 - stDate.getMonth() - 1); 
                totalMonth += enDate.getMonth() + 1;
            } else {
                totalMonth = enDate.getMonth() - stDate.getMonth();
            }
    
            totalMonthOfExperience += totalMonth + 1;
        });
    }
    
    return totalMonthOfExperience;

}


export default findExperience; 