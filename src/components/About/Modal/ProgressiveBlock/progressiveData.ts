export const progressiveData = [
    {skill: 'JavaScript', progress:85},
    {skill: 'TypeScript', progress: 75},
    {skill: 'React', progress: 90},
    {skill: 'CSS/SCSS', progress: 80},
] as const;

export type ProgressiveDataType = typeof progressiveData;
