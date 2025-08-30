using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SampleMVC1.ViewModels;

namespace SampleMVC1.Controllers
{

    [Authorize]
    public class UserProfileController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserProfileController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task<IActionResult> Index()
        {
            var currentUser = await _userManager.GetUserAsync(User);

            var roles = currentUser != null
                ? await _userManager.GetRolesAsync(currentUser)
                : new List<string>();

            var model = new UserProfileViewModel
            {
                UserName = currentUser?.UserName,
                Email = currentUser?.Email,
                Roles = roles,
                Message = roles.Contains("Admin")
                            ? "Welcome to Admin Dashboard"
                            : "Welcome to User Dashboard"
            };

            return View(model);
        }
    }
}
