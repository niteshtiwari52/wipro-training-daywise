// See https://aka.ms/new-console-template for more information

// Naming conventions
// public class Calculator
// {
//     // creating a method
//     public int AddOperation()
//     {
//         int studAge;
//         return 0;
//     }
//     public int subtract()
//     {
//         return 0;
//     }
// }



// Complete structure of code

using System; // packge name --> imported the builtin package
namespace CalulatorOperations // --> namespace declation

{
    internal class Program {
        // main is the entry point of program
        static void Main(string[] args)
        {
            Console.WriteLine("This is my C# Code");
            Console.WriteLine("This is my C# Code");
            Console.WriteLine("This is my C# Code");
            // data types
            Console.WriteLine("Data Types");
             char ch = 'B';
            Console.WriteLine("Char: " + ch);
            Console.WriteLine("Equivalent Nubmer: " + (byte)ch);
            Console.WriteLine("The minimum and maximum value of size: " + (int)char.MinValue +" "+ (int)char.MaxValue);
            Console.WriteLine("The char Size: " + sizeof(char));

            // INT16
            short num1 = 234;

            // INT32
            int number = 456;

            // INT64 
            long num = 834893;

            double price = 45.00;

            decimal marks = 45.7M;
            
            // unsafe
            // {
            //     int num2 = 456;
            //     int* ptr = &num2; 
            // }

            // Console.WriteLine($"Value: {num2}");
            // Console.WriteLine($"address of  num2: {(int)ptr}");

            Console.WriteLine($"Sum of 2 numbers");

            int a = 10;
            int b = 20;

            Console.WriteLine($"Sum of 2 numbers: {a+b}");

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
    }
}