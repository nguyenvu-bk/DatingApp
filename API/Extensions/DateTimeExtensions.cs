using System;
namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(DateTime dob)
        {
            var today = DateTime.Today;
            var age = today.Year - dob.Year;
            if (dob.Date > today.AddYears(-age)) return age--;
            return age;
        }
    }
}