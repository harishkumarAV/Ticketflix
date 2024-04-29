import java.util.*;
class main{
     public static void main(String arg[]){
          Scanner sc=new Scanner(System.in);
          int n=sc.nextInt();
          for(int i=0;i<n;i++){
               int a[]=new int[3];
               int b[]=new int[30];
               for(int k=0;k<2;k++){
                    a[k]=sc.nextInt();
               }
               for(int j=0;j<a[0];j++){
                    b[j]=sc.nextInt();
               }
               if(a[0]>a[1]){
                    System.out.println("No");
               }
               else{
                    System.out.println("Yes");
               }
          }
     }
}