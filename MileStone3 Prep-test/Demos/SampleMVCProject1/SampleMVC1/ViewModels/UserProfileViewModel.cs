namespace SampleMVC1.ViewModels
{
    public class UserProfileViewModel
    {
        public string? UserName { get; set; }
        public string? Email { get; set; }
        public IList<string>? Roles { get; set; }
        public string Message { get; set; } = "";
    }
}
