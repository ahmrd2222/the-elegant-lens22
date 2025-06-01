const eventsData = {
  title: "Event Photography",
  description: "Capturing special moments from life's most important celebrations",
  coverImage: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  galleries: [
    {
      id: "skh.bilal assaad",
      title: "skh.bilal assaad",
      date: "May 15, 2025",
      description: "Capturing the joy and accomplishment of Ali's university graduation ceremony",
      coverImage: "data:image/jpeg;base64,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",
      photos: [
        {
          id: "grad-1",
          src: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Graduate with diploma",
          description: "Proudly displaying the diploma"
        },
        {
          id: "grad-2",
          src: "https://images.pexels.com/photos/7944088/pexels-photo-7944088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Graduation ceremony",
          description: "Walking across the stage"
        },
        {
          id: "grad-3",
          src: "https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Graduate with family",
          description: "Family celebration after the ceremony"
        },
        {
          id: "grad-4",
          src: "https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Graduates throwing caps",
          description: "The traditional cap toss"
        },
        {
          id: "grad-5",
          src: "https://images.pexels.com/photos/6147160/pexels-photo-6147160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Graduate portrait",
          description: "Portrait session after graduation"
        }
      ]
    },
    {
      id: "nora-birthday-2025",
      title: "Nora's Birthday – April 2025",
      date: "April 10, 2025",
      description: "Celebrating Nora's special day with friends and family",
      coverImage: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      photos: [
        {
          id: "bday-1",
          src: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Birthday celebration",
          description: "Friends gathering for the party"
        },
        {
          id: "bday-2",
          src: "https://images.pexels.com/photos/5905865/pexels-photo-5905865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Birthday cake",
          description: "The birthday cake moment"
        },
        {
          id: "bday-3",
          src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Opening presents",
          description: "Unwrapping birthday gifts"
        },
        {
          id: "bday-4",
          src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Birthday toast",
          description: "Raising glasses for a toast"
        },
        {
          id: "bday-5",
          src: "https://images.pexels.com/photos/5638732/pexels-photo-5638732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          alt: "Party decorations",
          description: "Beautiful party setup and decorations"
        }
      ]
    }
  ]
}

export default eventsData