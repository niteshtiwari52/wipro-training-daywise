class DataTypeExample {
        static void Main() {
            // short, System.Int16
            // int -> 4 bytes, IL will not understand the int System.Int32 -- CLR
            // long -> 8 bytes, System.Int64
            // float -> 4 bytes
            // double -> 8 bytes
            // bool -> 1 bytes
            // char -> 2 bytes
            // string -> 2 bytes per character

            short number1 = 45;
            System.Int16  number2 = 34;
            Console.WriteLine(number1.GetType());
            Console.WriteLine(number2.GetType());

            int x = 40;
            System.Int32 x1  = 45;

            Console.WriteLine(x.GetType());
            Console.WriteLine(x1.GetType());

            // you will get int or uint
            // uint is not CLS-compliant because it may lead to compatibility issues

            // uint will take a +ve integers only starts with 0

            // public uint AddOperation(uint a, uint b){
            //     uint result = a + b;
            //     return result;
            // }          
            // public int AddOperation(int a, int b){
            //     int result = a + b;
            //     return result;
            // }
            
            // when we use int.Parse(String s) or if you are convert.ToInt32()
            // strictly it will throw an exception if your string is null or not a number
            // string val = "123";
            // int number = int.Parse(val);

            // string str1 = null;
            // int val1 = int.Parse(str1);

            // string str = "abc";
            // int value1 = int.Parse(str);


            string val = "123";
            int number = Convert.ToInt32(val);

            string str1 = null;
            int val1 = Convert.ToInt32(str1);

            // string str = "abc";
            // int value1 = Convert.ToInt32(str);
            object str = true;
            int value1 = Convert.ToInt32(str);

            string dataInput = "234";
            int result;

            // int.Parse is used when input is sure to be valid .
            // convert.ToInt32 is used when there will be a chances for options input
            // int.TryParse(string, out int) is used for user input

            bool bookResult = int.TryParse(dataInput, out result);

        }
}