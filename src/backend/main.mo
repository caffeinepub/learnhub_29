import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Array "mo:core/Array";

actor {
  type Course = {
    title : Text;
    description : Text;
    instructor : Text;
    category : Text;
    price : Nat;
    rating : Nat;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
  };

  let courses = Map.fromIter<Nat, Course>(
    [(0, {
      title = "Introduction to Motoko";
      description = "Learn the basics of Motoko programming language.";
      instructor = "Alice Smith";
      category = "Programming";
      price = 50;
      rating = 5;
    }), (1, {
      title = "Advanced Rust";
      description = "Deep dive into Rust programming.";
      instructor = "Bob Johnson";
      category = "Programming";
      price = 100;
      rating = 4;
    }), (2, {
      title = "Web Development";
      description = "Full stack web development course.";
      instructor = "Carol Lee";
      category = "Web Development";
      price = 75;
      rating = 5;
    })].values(),
  );

  let contactMessages = Map.empty<Nat, ContactMessage>();
  var nextMessageId = 0;

  public query ({ caller }) func getCourse(id : Nat) : async ?Course {
    courses.get(id);
  };

  public query ({ caller }) func getAllCourses() : async [Course] {
    courses.values().toArray();
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      name;
      email;
      message;
    };
    contactMessages.add(nextMessageId, newMessage);
    nextMessageId += 1;
  };
};
