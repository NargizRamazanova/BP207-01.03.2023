//int[,] nums = new int[2, 3]{
//    {2, 1, 3 },
//    { 3, 8, 5}
//};

//for (int i = 0; i < 2; i++)
//{
//    for (int k = 0; k < 3; k++)
//    {
//        Console.WriteLine(nums[i, k]);
//    }
//}

//string[] names ={"Melik","Fidan","Shefeq", "Aytac"};

//char query = 'a';

//for(int i = 0; i< names.Length ; i++)
//{
//    for(int k = 0; k < names[i].Length; k++)
//    {
//        if (names[i][k] == query)
//        {
//            Console.WriteLine(names[i]);
//        }
//    }
//}



//int a = 5;
//int b = a;

//b = 7;

//Console.WriteLine("a=" + a + " b="+b);


//int[] arr1 = { 1, 2, 3 };

//int[] arr2 = new int[arr1.Length];

//for(int i= 0; i< arr2.Length; i++)
//{
//    arr2[i] = arr1[i];
//}

//arr2[0] = 7;

//Console.WriteLine("Arr1");
//foreach(int elem in arr1)
//{
//    Console.Write(elem + " ");
//}
//Console.WriteLine();
//Console.WriteLine("Arr2");
//foreach (int elem in arr2)
//{
//    Console.Write(elem + " ");
//}

var student = new
{
    name="Mirnise",
    age = 20,
    work="Programmer",
    isMarried = false,
};

Console.WriteLine(student.name);