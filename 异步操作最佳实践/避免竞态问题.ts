export async function test() {

    let totalPosts = 0

    async function getPosts(userId: number) {
        const users = [
            {
                id: 1,
                posts: 5
            },
            {
                id: 2,
                posts: 3
            }
        ]
        // 模拟异步延迟
        await sleep(Math.random() * 1000)
        // 返回对应用户的帖子数量
        return users.find((user) => user.id === userId)?.posts  // find只返回原数组中第一个满足条件的元素，而map返回映射后的新数组
    }

    async function sleep(time: number) {
        return new Promise<void>(resolve => setTimeout(resolve, time))
    }

    async function addPosts(userId: number) {
        // totalPosts += await getPosts(userId)|| 0
        //! 两个函数都将其结果添加到TotalPosts中，造成竞态条件问题
        const posts = await getPosts(userId)
        totalPosts += posts || 0
    }

    await Promise.all([addPosts(1), addPosts(2)])

    console.log(totalPosts)

}

test()