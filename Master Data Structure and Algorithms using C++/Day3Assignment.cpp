#include <iostream>
#include<stdlib.h>
using namespace std;
//Creating Self referential structure:
struct Node
{
    int Data;
    Node *next;
};
//Function for deelete entry from end of the linked list.
Node *Delete_from_end(Node *head)
{
    Node *temp=head;
    if(head==NULL)
    {
        cout<<"The list is already empty.";
        return head;
    }
    if(head->next==NULL)
    {
        delete head;
        return NULL;
    }
    while(temp->next->next!=NULL)
    {
        temp=temp->next;
    }
    temp->next=NULL;
    return head;
}
//Function for deleting entry from beginning of the linked list.
Node *Delete_from_beg(Node *head)
{
    Node *newhead=NULL;
    if(head==NULL)
    {
        cout<<"Nothing to Delete. The list is already empty.";
        return head;
    }
    else
    {
        newhead=head->next;
        delete(head);
    }
    return newhead;
}
//Function to display the linked list.
void display(Node *head)
{
    Node *temp=head;
    int count=0;
    if(temp==NULL)
    {
        cout<<"The list is empty.";
    }
    cout<<"The elements of the list are:"<<endl;
    while(temp!=NULL)
    {
        cout<<temp->Data<< " "<<endl;
        temp=temp->next;
        count++;
    }
    cout<<"The Total Number of elements in the list is:"<< count<<endl;
}
//Function To Create a Node.
Node *create(int Data)
{
    Node *nptr=new(Node);
    nptr->Data=Data;
    nptr->next=NULL;
    return nptr;
}
//Function to insert a node from the end.
Node *insert_end(Node *head, int x)
{
    Node *ptr=create(x);
    Node *temp=head;
    if(head==NULL)
    {
        head=ptr;
        return head;
    }
    while(temp->next!=NULL)
    {
        temp=temp->next;
    }
    temp->next=ptr;
    return head;
}
//Function to enter a node from the beginning.
Node *insert_beg(Node *head, int x)
{
    Node *pt=create(x);
    if(head==NULL)
    {
        head=pt;
        return head;
    }
    pt->next=head;
    head= pt;
    return head;
}


int main()
{
    Node *head, *temp;
    head= NULL;
    head=insert_beg(head,5);
    head=insert_beg(head,10);
    head=insert_beg(head,15);
    head=insert_beg(head,20);
    head=insert_end(head,45);
    head=insert_end(head,242);
    head=insert_beg(head,14);
    display(head);
    cout<<"After deleting from beginning ";
    head=Delete_from_beg(head);
    display(head);
    cout<<"After deleting from end ";
    head=Delete_from_end(head);
    display(head);
    return 0;
}