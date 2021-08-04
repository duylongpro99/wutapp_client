import createRepository from '~/api/repository';
import createUserRepository from '~/api/userRepository';
import createBlogRepository from '~/api/blogRepository';
import createProjectRepository from '~/api/projectRepository';

export default (ctx, inject) => {
    // REGISTER REPOSITORY
    const repositoryWithAxios = createRepository(ctx.$axios);
    const userRepositoryWithAxios = createUserRepository(ctx.$axios);
    const blogRepositoryWithAxios = createBlogRepository(ctx.$axios);
    const projectRepositoryWithAxios = createProjectRepository(ctx.$axios);
    // ASSIGN REPOSITORY FOR GLOBAL VAR
    const repositories = {
        commonRepo: repositoryWithAxios('/'),
        userRepo: userRepositoryWithAxios('/auth'),
        blogRepo: blogRepositoryWithAxios(''),
        projectRepo: projectRepositoryWithAxios(''),
    };
    // inject('repository', repositoryWithAxios('/auth'));
    // inject('blogRepository', repositoryWithAxios('/blog'));
    inject('repositories', repositories);
};
// if add repo, at it in repo Type in plugin-types.d
