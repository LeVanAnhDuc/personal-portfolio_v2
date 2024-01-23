interface MapProps {
    className: string;
}

const Map: React.FC<MapProps> = ({ className }) => {
    return (
        <iframe
            className={className}
            title="my-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.375736707316!2d106.76933281027874!3d10.850632389258081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f23816ab%3A0x282f711441b6916f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgcGjhuqFtIEvhu7kgdGh14bqtdCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e1!3m2!1svi!2s!4v1690684807626!5m2!1svi!2s"
        ></iframe>
    );
};

export default Map;
