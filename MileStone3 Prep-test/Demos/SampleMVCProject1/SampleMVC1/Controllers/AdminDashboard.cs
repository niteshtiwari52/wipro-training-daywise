using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace SampleMVC1.Controllers
{
    public class AdminDashboard : Controller
    {
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly UserManager<IdentityUser> _userManager;

        public AdminDashboard(RoleManager<IdentityRole> role, UserManager<IdentityUser> user)
        {
            _roleManager = role;
            _userManager = user;
        }

        //[Authorize(Roles = "Admin")]
        public IActionResult Index()
        {
            var isAdmin = User.IsInRole("Admin");
            // if user role is admin then send message " welcome to admin dashboard" else " welcome to user dashboard"
            //ViewBag.Message = "Welcome to Admin Dashboard";

            if (isAdmin)
            {
                ViewBag.Message = "Welcome to Admin Dashboard";
            }
            else
            {
                ViewBag.Message = "Welcome to User Dashboard";
            }
            return View();
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public IActionResult CreateRole()
        {
            return View();
        }

        
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> CreateRole(string roleName)
        {
            if (string.IsNullOrWhiteSpace(roleName))
            {
                ViewBag.Error = "Role name is required";
                return View();
            }

            if (!await _roleManager.RoleExistsAsync(roleName))
            {
                var result = await _roleManager.CreateAsync(new IdentityRole(roleName));
                if (result.Succeeded)
                {
                    ViewBag.Message = $"Role '{roleName}' created successfully";
                }
                else
                {
                    ViewBag.Error = string.Join(", ", result.Errors);
                }
            }
            else
            {
                ViewBag.Error = "Role already exists";
            }

            return View();
        }

        [HttpGet]
        [Authorize(Roles = "Admin")]
        public IActionResult AddUserToRole()
        {
            return View();
        }


        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> AddUserToRole(string email, string roleName)
        {
            var user = await _userManager.FindByEmailAsync(email);

            if (user == null)
            {
                ViewBag.Error = "User not found";
                return View();
            }

            if (!await _roleManager.RoleExistsAsync(roleName))
            {
                ViewBag.Error = "Role does not exist";
                return View();
            }

            var result = await _userManager.AddToRoleAsync(user, roleName);

            if (result.Succeeded)
            {
                ViewBag.Message = $"User {email} added to role {roleName}";
            }
            else
            {
                ViewBag.Error = result.Errors;
            }

            return View();
        }

    }
}
