/// <reference path="script.js" />

app.filter("gender", () => {
        return (gender) => {
            switch (gender) {
                case 1:
                    return "Male";
                case 2:
                    return "Female"
                default:
                    return "Not Disclosed";
            }
        }
    })