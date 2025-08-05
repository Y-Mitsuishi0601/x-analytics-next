export const mockImages = [
    {
        id: 1,
        filename: "campaign_banner_2025.png",
        url: "/placeholder-image.jpg",
        size: "2.4 MB",
        dimensions: "1920x1080",
        uploadDate: "2025-01-15",
        usedInPosts: 5
    },
    {
        id: 2,
        filename: "product_showcase.jpeg",
        url: "/placeholder-image.jpg",
        size: "1.8 MB",
        dimensions: "1080x1080",
        uploadDate: "2025-01-12",
        usedInPosts: 3
    },
    {
        id: 3,
        filename: "team_photo.png",
        url: "/placeholder-image.jpg",
        size: "3.1 MB",
        dimensions: "1920x1280",
        uploadDate: "2025-01-10",
        usedInPosts: 8
    }
];

export const mockVoices = [
    {
        id: 1,
        filename: "brand_announcement.mp3",
        duration: "00:02:45",
        size: "4.2 MB",
        uploadDate: "2025-01-14",
        summary: "CEO announcement about new product launch and company vision for 2025",
        usedInPosts: 2
    },
    {
        id: 2,
        filename: "customer_testimonial.m4a",
        duration: "00:01:32",
        size: "2.8 MB",
        uploadDate: "2025-01-11",
        summary: "Customer testimonial about improved user experience and satisfaction",
        usedInPosts: 4
    },
    {
        id: 3,
        filename: "podcast_snippet.mp3",
        duration: "00:03:15",
        size: "5.1 MB",
        uploadDate: "2025-01-08",
        summary: "Excerpt from marketing podcast discussing social media trends and strategies",
        usedInPosts: 1
    }
];

export const mockAccounts = [
    {
        id: 1,
        username: "@brandvoice",
        displayName: "Brand Voice",
        avatar: "/placeholder-avatar.jpg",
        followers: "12.5K",
        following: "2.1K",
        posts: [
            { id: 1, content: "Great insights on social media marketing trends for 2025! 📈 #marketing", timestamp: "2h", likes: 45, retweets: 12 },
            { id: 2, content: "Just published our latest case study on increasing engagement rates by 300% 🚀", timestamp: "5h", likes: 89, retweets: 23 },
            { id: 3, content: "The future of AI in marketing is here. What are your thoughts? 🤖 #AI #marketing", timestamp: "1d", likes: 156, retweets: 67 }
        ]
    },
    {
        id: 2,
        username: "@socialexpert",
        displayName: "Social Media Expert",
        avatar: "/placeholder-avatar.jpg",
        followers: "8.3K",
        following: "1.5K",
        posts: [
            { id: 4, content: "Top 5 strategies that boosted our client's reach by 250% this month ⭐", timestamp: "1h", likes: 67, retweets: 15 },
            { id: 5, content: "Content creation tips that actually work in 2025 💡", timestamp: "4h", likes: 112, retweets: 34 }
        ]
    }
];

export const mockPosts = [
    { id: 1, username: "@brandvoice", displayName: "Brand Voice", content: "Great insights on social media marketing trends for 2025! 📈 #marketing", timestamp: "2h", likes: 45, retweets: 12, replies: 8 },
    { id: 2, username: "@socialexpert", displayName: "Social Media Expert", content: "Top 5 strategies that boosted our client's reach by 250% this month ⭐", timestamp: "1h", likes: 67, retweets: 15, replies: 12 },
    { id: 3, username: "@brandvoice", displayName: "Brand Voice", content: "Just published our latest case study on increasing engagement rates by 300% 🚀", timestamp: "5h", likes: 89, retweets: 23, replies: 5 },
    { id: 4, username: "@marketingguru", displayName: "Marketing Guru", content: "The power of storytelling in brand building cannot be overstated 📚 #branding", timestamp: "6h", likes: 134, retweets: 45, replies: 18 }
];

export const nextAction = {
    title: "Increase engagement with video content",
    description: "Analysis shows that video posts receive 3x more engagement. Consider creating short-form videos for the next campaign.",
    priority: "High"
};

export const projectSummary = {
    totalAccounts: 25,
    totalPosts: 1245,
    totalImages: 89,
    totalVoices: 23,
    analysisPeriod: "January 2025 - Present"
};

export const topKeywords = ["#marketing", "#social", "#engagement", "#analytics", "#growth"];

export const topAccounts = ["@brandvoice", "@socialexpert", "@marketingguru"];

export const topHashtags = ["#digitalmarketing", "#socialmedia", "#contentcreator"];
