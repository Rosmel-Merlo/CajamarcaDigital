

namespace Common.Application.Helpers
{
    public class DateTimeHelper
    {
        public DateTimeHelper() { }
        
        public DateTime DateTimePst()
        {
            try
            {
                DateTime fServer = DateTime.UtcNow;
                TimeZoneInfo timeLima = TimeZoneInfo.FindSystemTimeZoneById(
                    "SA Pacific Standard Time"
                );
                return fServer = TimeZoneInfo.ConvertTimeFromUtc(fServer, timeLima);
            }
            catch
            {
                return DateTime.Now;
            }
        }

    }
}