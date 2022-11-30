import React from 'react';

const Blog = () => {
    return (
        <div className='font-semibold px-32 pt-10 text-justify bg-red-100'>
            <h1 className='text-3xl'>What is Cors(cross-origin resource sharing)?</h1>
            <p>
                Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
            </p>
            <h1 className='text-3xl pt-10'>What are you using firebase? What other opinions do you have to implement authentication?</h1>
            <p>
                Firebase is an app development platform that helps you build and grow apps and games users love.
                Firebase is a Backend as a Service (BaaS) offering from Google that comes with many managed services. It’s easy to integrate and, in many cases, can easily replace custom backends.With all of its products, you can use Firebase in a multitude of apps for the web, Android, and iOS. Firestore or RTDB, paired with Authentication and Cloud Functions, can serve as a solid backend for most apps.

                <br />
                The opinion of the implement authentication is Authentication and authorization are important to control who has access to computer systems and resources. Principles of controlling access and properly authenticating apply to both internal access and remote access. Remote access requirements are more rigorous, but the same principles can be applied to internal access.
            </p>
            <h1 className='text-3xl pt-10'>How does the private route work?</h1>
            <p>
                Private Routes The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                The react private route component renders a route component if the user is logged in and in an authorised role for the route, if the user isn’t logged in they’re redirected to the /login page, if the user is logged in but aren’t in an authorised role they’re redirected to the home page.
            </p>
            <h1 className='text-3xl pt-10'>What is node? How does the node work?</h1>
            <p>
                Each element in a tree is a node. We need to define a node before we proceed to define a binary tree as a tree consists of nodes. We'll create a very simple node definition that has 3 properties, namely: left, right and data.

                left − This holds the reference to the left child of this node.

                right − This holds the reference to the right child of this node.

                data − This holds the reference to the data we want to store in this node.

                Let us see the code representation of such a structure.

                Examle
                class Node
                constructor(data, left = null, right = null)
                this.data = data;
                this.left = left;
                this.right = right;
                <br />
                1. Consequently, customarily, there has dependably been a huge inquiry with PCs where the CPU can merely complete one thing at a minute. It was settled long back by multi-threading, empowering us to have different ‘strings’ on an individual CPU. In this way, to clear up, on the off chance that you have ten strings running on, a CPU scheduler will part up the CPU’s time equitably among every one of them, so they involve break even with time cuts.
                <br />
                2. Henceforth maybe in 1 second, the majority of the ten strings would catch 100ms. It changes among them constantly and keeping in mind that it’s brisk, the exchanging holds a tremendous amount of overhead. Maintaining a strategic distance from that overhead would be fine.

            </p>
        </div>
    );
};

export default Blog;