class Employee {
    public void Input() {
        // Take user input
            int num3;
            int num4;
            Console.WriteLine("Enter first number: ");
            num3 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter 2nd number: ");
            num4 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine($"Sum of first and 2nd numbers: {num3 + num4}");
            Console.ReadKey();
    }
    public void Display() {

        Console.WriteLine("Employee Class MEthod Called");
    }
}