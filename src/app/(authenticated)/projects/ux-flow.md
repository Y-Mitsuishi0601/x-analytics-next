# Overview

_Core_ of this page is "To Store Insights for a project".

this page shows _Insights what to do next_ through alalysis of X.
Insights shows a summary of analyzing CSV file imported by a user.
By tracing the thought process of X marketer, anyone can use social media for business with high reproducibility.

# UX Flow

1. Import CSV: user
2. Run SQL: Analysis by AI
3. Query Insights: user, on UI

## Project × Insights Structure

- **Project** = Unit of analysis (managed by period, purpose, and client)
- **Insights** = "Insights and suggestions" linked to posts, accounts, etc.

## Tabs

1. Top Insights

Show insights for a project.

- **Next Action**
  Provides a Insight summary through analysis of CSV file as a Summary.
  The text is surrounded by a container, designed to draw the eye.

- **Summary for a project**
  In this section, users can see what the project is like.
  Users can grasp a workflow of the project.
  Summary is made of Accounts, Posts, and Storage, such as images and voices.

- **Keywords and hashtags**
  Users can see the most popular words, accounts and hashtags in the project.
  These are extracted in Accounts and posts

2. Accounts and Posts

Show each projects' Accounts and Posts Stored in a database.
UI Imitates X's one.

- **Accounts**
  Show a list of accounts.
  Recent Posts the user posted are also shown. (3-5 posts per accounts)
  On tap, users can see all the posts of the account.

- **Posts**
  Show a list of posts.
  On tap, users can see all the replies linked with a post.

3. Storage

Show each projects' Storage Stored in a database.
Storage contains images and voices: .png, jpeg for images, .mp3 and .m4a for voices only.
UI Imitates X's one.

- **Images**
  Show a list of images.

- **Voices**
  Show a list of voices.
  Summary of a Voice is added.
