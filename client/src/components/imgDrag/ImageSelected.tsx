interface Props {
	loading: boolean;
	img: string;
	onUpload: () => Promise<void>;
	onImageRemove: (index: number) => void;
}

export const ImageSelected = ({
	img,
	loading,
	onUpload,
	onImageRemove,
}: Props) => {
	return (
		<div>
			<img
				className='image-selected'
				src={img}
				alt='image-selected'
				width={300}
			/>
			<div className='container-buttons'>
				{loading ? (
					<p className='loading-label'>Upload image ⏳...</p>
				) : (
					<>
						<button disabled={loading} onClick={onUpload}>
							Upload 📤
						</button>

						<button disabled={loading} onClick={() => onImageRemove(0)}>
							Cancel ❌
						</button>
					</>
				)}
			</div>
		</div>
	);
};
