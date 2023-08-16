btn = document.querySelector("button");

let output_Month = document.querySelector("#age_Months")
let output_year = document.querySelector("#age_Years")
let output_Day = document.querySelector("#age_Days")


btn.addEventListener("click", () => {
    let date = new Date;
    let input_year = document.querySelector("#year").value;
    let input_month = document.querySelector("#month").value;
    let input_day = document.querySelector("#day").value;

    let dob_str = `${input_year}-${input_month}-${input_day}`

    const dob = new Date(dob_str);
    const now = new Date();

    let total_days = Math.floor((now - dob) / (1000 * 60 * 60 * 24));

    let years = now.getFullYear() - dob.getFullYear();
    let months = now.getMonth() - dob.getMonth();
    let days = now.getDate() - dob.getDate();

    let x = months;
    if (months < 0) {
        years--;
        console.log(months)
        x = 12 + months
    }

    output_Month.innerText = x;
    output_year.innerText = years;
    output_Day.innerText = days;
})
