import { useMutation } from 'react-query'; 

const createPost = async  (postData) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(postData),
    });
    return response.json(); 
};

function NewPostForm() {
    const { mutate, isLoading, error } = useMutation(createPost, {
        onSuccess: () => {
            console.log('Post created successfully');
        },
        onError:(error) => {
            console.error('Error creating post:', error);
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPost = { title: 'My New Post', body: 'This is my post content.', userId: 1 }; 
        mutate(newPost);
    }

    return (
        <div>
            {error && <p>Error creating post</p>}
            {isLoading ? (
                <p>Submitting...</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <button type="submit">Create Post</button>
                </form>
            )}
        </div>
    );
}

export default NewPostForm;