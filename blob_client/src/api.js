export async function getBlogPosts() {
    const url = '/posts';
    const resp = await fetch(
        url,
        {'headers': {'Content-Type': 'application/json'}},
    );
    return await resp.json();
}


export async function getBlogPost(id) {
    const url = `/posts/${id}`;
    const resp = await fetch(
        url,
        {'headers': {'Content-Type': 'application/json'}},
    );
    return await resp.json();
}

export async function getTags() {
    debugger
    const url = '/tags';
    const resp = await fetch(
        url,
        {'headers': {'Content-Type': 'application/json'}},
    )
    return await resp.json();
}
